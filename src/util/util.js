export function setPermission(list) {
	let permissions = [];
	if (list) {
		list.forEach(permission => {
			if (permission.resources && permission.resources.length > 0) {
				permission.resources.forEach(res => {
					// if (res.type === 'page')
					permissions.push(res);
				});
			}
		});
		sessionStorage.setItem('tapdata_permissions', JSON.stringify(permissions));
	}
	return permissions;
}

export function signOut() {
	let cookie = window.VueCookie;
	sessionStorage.removeItem('tapdata_permissions');
	sessionStorage.removeItem('BTN_AUTHS');
	cookie.delete('token');
	cookie.delete('user_id');
	cookie.delete('login');
	cookie.delete('isAdmin');
	cookie.delete('email');
	cookie.delete('username');
	cookie.delete('isReadonly');
	window.App.$router.push('/login');
}

export function toRegExp(s) {
	let arr = ['\\', '$', '(', ')', '*', '+', '.', '[', ']', '?', '^', '{', '}', '|', '-'];
	let word = s;
	for (let i = 0; i < arr.length; i++) {
		let str = '\\' + arr[i];
		word = word.replace(new RegExp(str, 'g'), '\\' + arr[i]);
	}
	return word;
}

export function getUrlSearch(name) {
	// 未传参，返回空
	if (!name) return null;
	// 查询参数：先通过search取值，如果取不到就通过hash来取
	var after = window.location.search;
	after = after.substr(1) || window.location.hash.split('?')[1];
	// 地址栏URL没有查询参数，返回空
	if (!after) return null;
	// 如果查询参数中没有"name"，返回空
	if (after.indexOf(name) === -1) return null;
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	// 当地址栏参数存在中文时，需要解码，不然会乱码
	var r = decodeURI(after).match(reg);
	// 如果url中"name"没有值，返回空
	if (!r) return null;
	return r[2];
}
let timeout = null;
export function delayTrigger(func, t = 500) {
	if (timeout) {
		window.clearTimeout(timeout);
	}
	timeout = setTimeout(() => {
		func && func();
		timeout = null;
	}, t);
}
