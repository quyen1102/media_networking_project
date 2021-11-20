module.exports = {
    multipleObjMoongose: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    objMongoose: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    },
}