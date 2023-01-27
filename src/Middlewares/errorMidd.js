const errorMidd = (error, _req, res, _next) => {
    res.status(error.status).send({ message: error.message });
};

module.exports = {
    errorMidd,
};