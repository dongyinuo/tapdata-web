import axios from 'axios'

import Cookie from '@tap/shared/src/cookie'

export const getImgByType = function (type) {
  if (!type || type === 'jira') {
    type = 'default'
  }
  return require(`@tap/assets/images/databaseType/${type.toLowerCase()}.png`)
}

export const verify = function (value) {
  var arr = ['\\', '$', '(', ')', '*', '+', '.', '[', ']', '?', '^', '{', '}', '|', '-']
  for (var i = 0; i < arr.length; i++) {
    var str = '\\' + arr[i]
    value = value.replace(new RegExp(str, 'g'), '\\' + arr[i])
  }
  return value
}
//列表脱敏
export const desensitization = function (url) {
  let matchResult = url.match(/^mongodb(\+srv)?:\/\/(.+):(.+)@/)
  if (matchResult && matchResult[3]) {
    return url.replace(`:${matchResult[3]}@`, ':*********@')
  }
  return url
}

export const handleProgress = function (data) {
  let count = 0
  data.forEach(log => {
    if (log.status === 'passed') {
      count++
    }
  })
  let len = (100 / data.length) * count
  return Math.round(len) ? Math.round(len) : 0
}

//数据源基础字段
export const defaultModel = {
  default: {
    id: '',
    name: '',
    connection_type: '',
    table_filter: ''
  }
}

// 数据源图标
export const getConnectionIcon = pdkHash => {
  if (pdkHash) {
    const token = Cookie.get('token')
    let baseUrl = axios.defaults.baseURL
    return baseUrl + `/api/pdk/icon?access_token=${token}&pdkHash=${pdkHash}`.replace('//', '/')
  } else {
    return ''
  }
}
