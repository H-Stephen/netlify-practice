// !  正则验证

// 应用英文名正则, 数据库名字正则, 用户账号 允许英文,数字,中划线,下划线
export const letterNumberDashUnderlinePattern = /^[a-zA-Z0-9-_]+$/;

// QQ正则
export const qqPattern = /^[1-9][0-9]{4,10}$/;

// artifactId正则 数字,字母,中划线
export const numberLetterDashPattern = /^[a-zA-Z0-9-]+$/;

// 允许英文,数字,下划线的正则
export const letterNumberUnderlinePattern = /^\w+$/;

// 版本校验
export const versionPattern = /^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/;

// 密码校验 6-16位数 仅为字母和数字
export const pswPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

// 新的密码校验 8-32位 数字、字母、特殊字符至少两种
export const newPswPattern = /^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]{8,32})$/;

// 仅为小写字母和中划线
export const letterDashPattern = /^[a-z-]+$/;

// 手机号码验证(新增167/191号段)
export const phonePattern = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[67]|7[0135678]|9[189])\d{8}$/;

// 金额校验(格式可以为浮点数)
export const amountPattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,3})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;

// 数字校验
export const numberPattern = /^[0-9]+$/;

// 中文字符校验
export const chineseCharPattern = /[\u4e00-\u9fa5]/gm;

// 邮箱校验
export const emailPattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

// 身份证校验
export const idCardPattern = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

// 邮编校验
export const zipCodePattern = /^[1-9]\d{5}(?!\d)$/;
