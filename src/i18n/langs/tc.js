import tcLocale from 'element-ui/lib/locale/lang/zh-TW';

const tc = {
	...tcLocale,
	message: {
		api: {
			get: {
				error: '加載數據失敗.'
			}
		},
		exists_name: '名稱已存在',
		search: '搜索',
		serviceCluMange: '服務集群管理',
		statusLog: '狀態日誌',
		sourchName: '名稱搜索',
		placeholderServer: '請輸入服務器名稱',
		filter: '篩選',
		addServerMon: '添加服務監控',
		startUp: '啟動',
		close: '關閉',
		manageSys: '管理後台',
		restart: '重啓',
		syncGover: '同步治理',
		screen: '屏幕',
		delete: '刪除',
		cancle: '取消',
		cancel: '取 消',
		confirm: '確定',
		placeholderMonServer: '請輸入監控的服務名稱',
		placeholderCommand: '請輸入command',
		nullContent: '不能為空',
		saveOK: '保存成功',
		saveFail: '保存失敗',
		copyFail: '複製失敗',
		copySuccess: '複製成功',
		deleteOK: '刪除成功',
		deleteFail: '刪除失敗',
		selectTime: '選擇時間',
		selectDate: '選擇日期',
		server: '服務器',
		serviceType: '服務類型',
		level: '級別',
		placeholderSelect: '請選擇',
		time: '時間',
		hostName: '主機名',
		ipAddress: 'ip地址',
		uniqueEncode: '唯一編碼',
		logs: '日誌信息',
		closeSever: '關閉服務',
		restartServer: '重啓服務',
		deleteOrNot: "是否刪除",
		startupAfter_delete: '請啟動後刪除',
		startupAfter_add: '請啟動後添加',
		noData: '暫無數據',
		prompt: '提示',
		resetMessage: '此操作將重置該任務狀態, 是否重置?',
		deteleMessage: '此操作將刪除該任務, 是否刪除?',
		cancleReset: '已取消重置',
		resetOk: '重置成功',
		resetFailed: '重置失敗',
		operator: '操作'
	},
	dataFlow: {
		average: '平均',
		current: '當前',
		allNode: '全部節點',
		taskName: '任務名稱',
		creatdor: '創建人',
		creationTime: '創建時間',
		state: '狀態',
		executionTime: '本次執行時間',
		inputNumber: '本次輸入',
		outputNumber: '本次輸出',
		rowCount: '條數',
		inputOutput: '輸入輸出統計',
		transf: '傳輸耗時',
		dataScreening: '數據總覽',
		second: "秒",
		min: "分",
		hour: "時",
		day: "日",
		input: '輸入',
		output: '輸出',
		totalInput: '總輸入',
		totalOutput: '總輸出',
		replicate: "數據同步差距",
		throughputpop: '平均每秒源端數據採集的速度以及目標端寫入的速度，數值越大越好',
		transtime_pop: '傳輸耗時：除源節點外，事件處理完的時間減去事件的發生時間。節點間統計：事件從進入節點到輸出到所消耗的時間。任務流統計：所有節點耗時相加，數值越小越好',
		replicate_pop: '源庫和目標庫數據最後更新時間的差距，數值越小越好',
		status: {
			running: '運行中',
			paused: '已暫停',
			draft: '草稿',
			scheduled: '調度中',
			stopping: '停止中',
			error: '錯誤',
			force_stopping: '強制停止',
		},
		searchPlaceholder: '任務名稱/節點名/庫表名',
		dataRange: '創建日期範圍',
		startTime: '開始時間',
		endTime: '結束時間',
		separator: "至",
		dataPlaceholder: "選擇時間範圍",
		taskStatus: '運行狀態',
		taskStatusPlaceholder: '請選擇任務狀態',
		updateTime: '更新時間',
		runningSpeed: '運行速度',
		operate: '操作',
		dataMap: '數據地圖',
		edit: '編輯',
		copy: '複製',
		reset: '重置',
		detail:'任务监控',
		select_source_connection: '源端連接',
		select_sync_mode: '同步方式',
		mapping: '關聯關係',
		select_target_connection: '目標端連接',
		sync_mode: '同步模式',
		sync_type: '同步類型',
		initial_sync: '初始化',
		cdc: '增量同步',
		send_email: '發送郵件',
		stopped: ' 當任務停止',
		error: '當任務出錯',
		edited: '當任務被編輯',
		started: '當任務開啟',
		drop_target_before_start: '開啟任務前是否刪除目標表',
		run_custom_sql: '重複運行自定義SQL',
		stop_on_error: '遇到錯誤時停止同步',
		need_to_create_Index: '自動創建目標索引',
		is_schedule: '定期調度任務',
		cron_expression: '調度cron表達式',
		data_quality_tag: '添加數據質量標籤',
		notification_lag: '通知',
		isOpenAutoDDL: '自動處理DDL操作',
		send_email_when_replication: '幾秒後重新發送',
		send_email_at_most_one_replication: '超過多少秒取消發送',
		read_cdc_interval: '增量同步間隔(ms)',
		read_batch_size: '每次讀取多少',
		mission: '描述',
		yes: 'yes',
		no: 'no',
		nodeName: '節點名稱',
		aggFunction: '聚合函數',
		aggExpression: '聚合表達式',
		filterPredicate: '過濾器',
		groupByExpression: '分組表達式',
		polymerization: '聚合處理',
		button: {
			setting: '設置',
			logs: '日誌',
      preview: '預覽',
			capture: '數據檢視',
			stop_capture: '停止檢視',
			start: '啟動',
			stop: '停止',
			force_stop: '強制停止',
			reset: '重置',
			save: '保存',
		},
		save_before_running: '請先保存再運行',
		reset_job: {
			msg: '重置任務?',
			tip: '提示',
		},
		stop_job: {
			msg: '停止任務?',
			force_stop_msg: '強制停止任務?',
			tip: '提示'
		}
	},
	connection: {
		status: {
			testing: '测试中',
			invalid: '无效',
			ready: '有效',
		}
	},
	editor: {
		cell: {
			validate: {
				empty_name: '名稱必填.',

				none_setting: '設置不能為空.',
				none_stage: '至少由一個節點.',
				none_data_node: '至少有兩個數據節點',
				none_link_node: '至少有一個連線',
				start_with_data_node: '必須使用數據節點作為源',
				acyclic: '數據處理流程不能有循環'
			},
			data_node: {
				database: {
					name: '數據庫',
					tip: '任意類型數據庫',
					defaultText: '數據庫',

					none_database: '數據庫必填.',

					form: {
						placeholder: '請選擇數據庫',
						label: '數據庫'
					}
				},
				collection: {
					name: '數據集',
					tip: 'MongoDB 數據集',
					defaultText: '數據集',

					none_database: 's數據庫必填.',
					none_collection: '數據集必填.',
					none_pk: '主鍵必填.',

					form: {
						database: {
							label: '數據庫',
							placeholder: '請選擇MongoDB數據庫'
						},
						collection: {
							label: '數據集',
							placeholder: '請選擇數據集'
						},
						pk: {
							label: '主鍵',
							placeholder: '請輸入主鍵'
						},
						dropTable: {
							label: '已存在的數據',
							placeholder: '',
							keep: '保持已存在的數據',
							remove: '運行前刪除已存在的數據'
						}
					}
				},
				table: {
					name: '表',
					tip: 'RDBMS 表',
					defaultText: '表',

					none_database: '數據庫必填.',
					none_table: '表必填.',
					none_pk: '主鍵必填.',

					form: {
						database: {
							label: '數據庫',
							placeholder: '請選擇數據庫'
						},
						table: {
							label: '表',
							placeholder: '請選擇表'
						},
						custom_sql: {
							label: '自定義SQL',
							placeholder: '請輸入自定義SQL'
						}
					}
				}
			},
			processor: {
				aggregate: {
					name: '聚合',
					tip: '聚合處理器',
					defaultText: '聚合',
					none_function: '聚合函數必填.',
					none_group: '分組表達式必填.',
					none_aggregation_expression: '聚合表達式必填.',
					new_aggregate: '添加聚合',
					none_stage: '至少有一个聚合处理',
				},
				field: {
					name: '字段',
					tip: '字段處理器',
					defaultText: '字段處理器',

					form: {
						name: {
							label: '节点名称',
							placeholder: '请输入节点名称'
						},
						description: {
							label: '描述',
							placeholder: '请输入节点描述'
						},
						fieldName: '字段名称',
						fieldType: '字段类型'
					}
				},
				script: {
					name: '腳本',
					tip: '腳本處理器',
					defaultText: '腳本處理器',

					none_script_type: '腳本類型必填.',
					none_script: '腳本必填.',

					form: {
						name: {
							label: '节点名称',
							placeholder: '请输入节点名称'
						},
						type: {
							label: '脚本类型',
							placeholder: '请选择脚本类型'
						},
						script: {
							label: '脚本',
							placeholder: '请输入脚本'
						},
					}
				}
			},
			link: {
				none_join_type: '關聯類型必填',
				none_join_key: '關聯字段必填',
				none_join_path: '關聯寫入路徑必填',
				form: {
					joinType: {
						label: '数据写入模式',
						placeholder: '请选择数据写入模式'
					},
					joinPath: {
						label: '关联后写入路径',
						placeholder: '请输入关联后写入路径'
					},
					joinKeys: {
						label: '关联条件',
						sourceField: '源字段',
						targetField: '目标字段',
					},
				},

				writeMode: {
					append: '追加寫入',
					upsert: '更新已存在或插入新數據',
					update: '更新寫入',
					merge_embed: '更新內嵌數組',
				}
			}
		},
		ui: {
			sidebar: {
				setting: '任務設置',
				node_setting: '節點屬性',
				logs: '日誌',
				capture: '抓取數據',
				style: '樣式',

				data_nodes: '數據節點',
				processor: '處理節點',
			},
			toolbar: {
				undo: {
					tip: '重做'
				},
				redo: {
					tip: '撤銷'
				},
				clear_paper: {
					tip: '清空'
				},
				export_svg: {
					tip: '導出SVG'
				},
				export_png: {
					tip: '導出PNG'
				},
				print: {
					tip: '打印'
				},
				to_back: {
					tip: '置後'
				},
				to_front: {
					tip: '置前'
				},
				layout: {
					tip: '自動佈局'
				},
				zoom_to_fit: {
					tip: '填充可視區域'
				},
				zoom_out: {
					tip: '放大'
				},
				zoom_in: {
					tip: '縮小'
				},
				grid_size: {
					tip: '網格大小'
				},
				fullscreen: {
					tip: '切換全屏'
				}
			},
		},
		preview: {
			stage: '節點',
			table: '數據表'
		},
	},
};

export default tc;
