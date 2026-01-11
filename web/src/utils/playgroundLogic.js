export const buildReturnPayload = (t, numerator, denominator) => {
  const a = Number(numerator)
  const b = Number(denominator)
  const payload = { ok: true, error: null, data: null, msg: '' }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    payload.ok = false
    payload.error = 'ValueError'
    payload.msg = t.playgroundInvalid
  } else if (b === 0) {
    payload.ok = false
    payload.error = 'ZeroDivisionError'
    payload.msg = t.playgroundZero
  } else {
    payload.data = a / b
    payload.msg = t.playgroundSuccess
  }

  return payload
}
