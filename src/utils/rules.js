export const carID = new RegExp(
  '^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|(DF[0-9]{4}))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]){1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$'
)

// 车牌校验 - async-validator
export const checkID = (rule, v, cb) => {
  if (v === '') {
    cb(new Error('请输入车牌'))
  } else if (!carID.test(v)) {
    cb(new Error('请输入正确的车牌'))
  } else {
    cb()
  }
}

export const checkPhone = (rule, v, cb) => {
  const n = /^1([3456789])\d{9}$/
  if (!v) {
    cb(new Error('请输入手机号码'))
  } else if (!n.test(v)) {
    cb(new Error('请输入正确的手机号码'))
  } else {
    cb()
  }
}

export const checkLngLat = (rule, v, cb, self) => {
  const { latitude, longitude } = self.site
  console.log(longitude, latitude)
  const lng = /^[-+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/
  const lat = /^[-+]?((0|([1-8]\d?))(\.\d{1,10})?|90(\.0{1,10})?)$/
  if (!latitude || !longitude) {
    cb(new Error('请选择经纬度'))
  } else if (lat.test(latitude) && lng.test(longitude)) {
    cb()
  } else {
    cb(new Error('经纬度错误'))
  }
}
