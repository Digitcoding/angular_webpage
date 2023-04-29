const Designation = require('../models').designation;
const Role = require('../models').role;
const Employee = require('../models').employee;

const getEmployees = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findAll({
    // where: {
    //   roleId: 3,
    //   designationId: 3

    // },
    include: [
      { model: Designation },
      { model: Role }
    ]

  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const getDesignation = async function (req, res) {
  let err;
  [err, designation] = await to(Designation.findAll())
  console.log('Designation: ', designation);
  // [err, response] = await to(Employee.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { designation });
}
module.exports.getDesignation = getDesignation;

const getRole = async function (req, res) {
  let err;
  [err, role] = await to(Role.findAll())
  console.log('Designation: ', role);
  // [err, response] = await to(Employee.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { role });
}
module.exports.getRole = getRole;
//INSERT DATA
const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  // console.log("body", body);
  [err, insert] = await to(Employee.create(body))
  // console.log('Insertdata: ', insert);

  if (err) return ReE(res, err, 422);
  return ReS(res, { insert });
}
module.exports.createEmployee = createEmployee;
//delete data
const deleteEmployee = async function (req, res) {
  let err;
  let body = req.body;
  console.log("body", body);

  [err, deleteId] = await to(Employee.destroy({
    where: {
      employeecode: body.employeecode
    }
  }));

  if (err) return ReE(res, err, 422);
  return ReS(res, { deleteId });
}
module.exports.deleteEmployee = deleteEmployee;
//getemployeedata

const getEmployeeData = async function (req, res) {
  let err;

  let body = req.body;
  console.log(body);
  [err, empdata] = await to(Employee.findOne({
    where: {
      employeecode: body.employeecode
    }
  }))
  if (err) return ReE(res, err, 422);
  return ReS(res, { empdata });
}
module.exports.getEmployeeData = getEmployeeData;
//updateemployee
const updateEmployee = async function (req, res) {
  let err;
  let body = req.body;
  // console.log("body", body);
  [err, insert] = await to(Employee.update(body, {
    where: {
      employeecode: body.employeecode
    }
  }))
  // console.log('Insertdata: ', insert);

  if (err) return ReE(res, err, 422);
  return ReS(res, { insert });
}
module.exports.updateEmployee = updateEmployee;