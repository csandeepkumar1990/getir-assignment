 const ProductService = require('../services/products.service');
 const ProductController = require('../controllers/products.controller');
 const { mockRequest, mockResponse } = require('../utils/interceptor')

jest.mock('../services/products.service'); // mocking product service
describe("Product controller getAll method", () => {
  test('should throw error reponse', async () => {
    let req = mockRequest();
    const res = mockResponse();

    await ProductController.getAll(req, res);

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith({"code": 1, "msg": "Error occurred while retrieving the Documents"});
  });

  it("should throw error with status with 422", async () => {
        const req = mockRequest();
        req.body.startDate = "2020-01-011"; //invalid start date
        const res = mockResponse();
        await ProductController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(422);
   });

   it("should throw error with status with 422", async () => {
        const req = mockRequest();
        req.body.startDate = "2020-01-01"; 
        req.body.endDate = "2020-01-011"; //invalid start date
        const res = mockResponse();
        await ProductController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(422);
   });

   it("should return success with status with 200", async () => {
        const req = mockRequest();
        req.body.startDate = "2020-01-01"; 
        req.body.endDate = "2021-01-01"; 
        const res = mockResponse();
        await ProductController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });
});