/**
 * @author lg<lirufei0808@gmail.com>
 * @date 2020/11/27
 * @description
 */
export const getFieldsIds = function(fields) {
	let fieldIds = [];
	if (fields) {
		fieldIds = fields.map(field => field.id);
	}
	return fieldIds;
};

export const getFieldsNames = function(fields) {
	let fieldNames = [];
	if (fields) {
		fieldNames = fields.map(field => field.field_name);
	}
	return fieldNames;
};

export const fieldsNamesMap = function(fields) {
	let fieldsNamesMap = {};
	if (fields) {
		fields.map(s => (fieldsNamesMap[s.field_name] = s.id));
	}
	return fieldsNamesMap;
};

export const fieldIsDeleted = function(fields) {
	let fieldIsDeleted = [];
	if (fields) {
		fieldIsDeleted = fields.filter(field => field.is_deleted).map(n => n.id);
	}
	return fieldIsDeleted;
};

export const handleOperation = function(fields, operations) {
	//查找是否有被删除的字段且operation有操作
	let fieldOriginalIds = getFieldsIds(fields);
	let fieldOriginalIsDeleted = fieldIsDeleted(fields);
	let temporary = operations;
	if (temporary.length > 0) {
		for (let i = 0; i < temporary.length; i++) {
			if (fieldOriginalIsDeleted.includes(temporary[i].id) && !temporary[i]['keep']) {
				temporary.splice(i, 1);
				i--;
				continue;
			} else if (temporary[i].op === 'CREATE' && !fieldOriginalIds.includes(temporary[i].triggerFieldId)) {
				temporary.splice(i, 1);
				i--;
				continue;
			}
		}
	}
	return temporary;
};

export const isValidate = function(operations, schema) {
	//字段处理器是否校验通过
	let operation = operations || [];
	let isValidate = true;
	let errorList = [];
	if (operation.length > 0) {
		//data.operation id不匹配的字段验证 跟当前schema进行比较operation.id
		let originalSchema = schema || {};
		let fieldOriginalIds = getFieldsIds(originalSchema.fields);
		let fieldDeleted = fieldIsDeleted(originalSchema.fields);
		let fieldOriginalNames = getFieldsNames(originalSchema.fields);
		for (let i = 0; i < operation.length; i++) {
			// isType 1表示id name 都不匹配 2表示name匹配 3表示该字段被标记为删除且id匹配 4 新建字段处理 5 脚本处理
			let node = {};
			if (operation[i].op === 'CREATE') {
				node = {
					id: operation[i].id,
					isType: 4,
					keep: false,
					action: operation[i].action,
					op: operation[i].op,
					field: operation[i].field,
					javaType: operation[i].javaType,
					level: operation[i].level,
					tableName: operation[i].tableName,
					triggerFieldId: operation[i].triggerFieldId
				};
			} else {
				node = {
					id: operation[i].id,
					color: operation[i].color,
					field: operation[i].field,
					isType: 1,
					keep: false,
					label: operation[i].label,
					op: operation[i].op,
					operand: operation[i].operand,
					originalDataType: operation[i].originalDataType || operation[i].type,
					primary_key_position: operation[i].primary_key_position,
					table_name: operation[i].table_name,
					type: operation[i].type
				};
			}
			if (operation[i].op === 'CREATE' && !fieldOriginalIds.includes(operation[i].triggerFieldId)) {
				errorList.push(node);
				isValidate = false;
			} else if (
				!fieldOriginalIds.includes(operation[i].id) &&
				!fieldOriginalNames.includes(operation[i].field) &&
				operation[i].op !== 'CREATE'
			) {
				node.isType = 1;
				node.keep = false;
				errorList.push(node);
				isValidate = false;
			} else if (
				!fieldOriginalIds.includes(operation[i].id) &&
				fieldOriginalNames.includes(operation[i].field) &&
				operation[i].op !== 'CREATE'
			) {
				node.isType = 2;
				node.keep = true;
				errorList.push(node);
				isValidate = false;
			} else if (fieldDeleted.includes(operation[i].id)) {
				node.isType = 3;
				node.keep = true;
				errorList.push(node);
				isValidate = false;
			}
		}
	}
	return {
		isValidate: isValidate,
		errorList: errorList
	};
};
export const isScript = function(operations, scripts) {
	let fieldIds = [];
	let errorList = [];
	if (operations) {
		fieldIds = operations.map(field => field.id);
	}
	if (scripts) {
		for (let i = 0; i < scripts.length; i++) {
			if (!fieldIds.includes(scripts[i].id)) {
				let node = {
					isType: 5,
					keep: false,
					color: scripts[i].color,
					field: scripts[i].field,
					id: scripts[i].id,
					label: scripts[i].label,
					primary_key_position: scripts[i].primary_key_position,
					script: scripts[i].script,
					scriptType: scripts[i].scriptType,
					tableName: scripts[i].tableName,
					type: scripts[i].type
				};
				errorList.push(node);
			}
		}
	}
	return errorList;
};
