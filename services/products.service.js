const ProductModel = require("../models/product.model");

/**
 * Handling the Business logic
 * Filtering the products data
 * code: 1 for error
 * code: 0 for success
 */
exports.getAll = async (startDate, endDate, minCount, maxCount) => {
    try {

        //filter documents between the range
        const dateFilter = {
            "$match": {
                "createdAt": {
                    "$gte": startDate, // after the start date
                    "$lt": endDate // before the end date
                }
            }
        }

        //peels of documents by count
        const peelOffDocument = { "$unwind": "$counts" }
        const grouping = {
            "$group": {
                "_id": "$_id",
                "count": { "$sum": "$counts" },
                "key": { "$first": "$key" },
                "createdAt": { "$first": "$createdAt" },
            }
        }

        //filter documents between the range
        const countFilter = {
            "$match": {
                "count": {
                    "$gte": minCount, // larger than the min count
                    "$lt": maxCount  // smaller than the max count
                }
            }
        }

        //output only required columns
        const projections = {
            "$project": {
                "_id": 0, //dont include id
                "key": 1,
                "createdAt": 1,
                "totalCount": "$count"
            }
        }

        //aggregate pipeline
        const filteredProducts = await ProductModel.aggregate([
            dateFilter,
            peelOffDocument,
            grouping,
            countFilter,
            projections
        ]).exec();

        console.log(filteredProducts.length);

        if (filteredProducts.length > 0) {
            return filteredProducts;
        }
        else {
            throw ({ code: 1, msg: "No matching records found.", status: 404 })
        }
    } catch (err) {
        console.log(err);
        throw ({ msg: err.msg || 'Error occurred while retrieving the Documents.', code: err.code || 1, status: err.status || 500 });
    }
}
