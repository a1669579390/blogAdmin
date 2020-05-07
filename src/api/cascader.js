const options = [{
    value: 'web前端',
    label: 'web前端',    
      children: [
        {
        value: 'HTML5',
        label: 'HTML5',
        },  
        {
        value: 'CSS3',
        label: 'CSS3'
      }, {
        value: 'JS',
        label: 'JS'
      }, {
        value: 'VUE',
        label: 'VUE'
      }, {
        value: '小程序',
        label: '小程序'
      }]
    }, {
      value: '服务器',
      label: '服务器',
      children: [{
        value: 'NodeJs',
        label: 'NodeJs'
      }, {
        value: 'PHP',
        label: 'PHP'
      }]
  },{
    value: '数据库',
    label: '数据库',
    children: [{
      value: 'MySQL',
      label: 'MySQL'
    }] 
  }]
  export {options}