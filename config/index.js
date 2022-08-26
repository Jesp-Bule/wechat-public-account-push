export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx089710c924952941",
    // 公众号appSecret
    appSecret: "f03f8fc913fcbb8d01ee3554fc1bab7c",
    // 模板消息id
    templateId: "M_EzRjZctw63T_LH_adNL1ccqGKQ_oeRxAzX2yQRkV4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oVTnm5mTQN9hH5rRxppJvS0aclfA","oVTnm5oLOXxPXtt_ruxqUiao5AwY"],
     
    // 信息配置
    // 所在省份
    province: "陕西",
    // 所在城市
    city: "咸阳",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小成", "year": "2001", "date": "09-24", "type": 'new'},
      {"name": "小孙", "year": "2001", "date": "04-25", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-01-09",
    // 结婚纪念日
    // marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
