export default function modelToPojo(model, fields) {
  let result = {};
  let fieldNames = fields;
  if (model && !fields) {
    fieldNames = model.constructor.attributeNames;
  }

  if (model && fields) {
    result = model.getAttributes(...fieldNames);
  }
  return result;
}
