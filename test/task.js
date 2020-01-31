require('dotenv').config();
const supertest = require('supertest');
const testRequest = supertest(process.env.TEST_URL);
const expect = require('expect');
const sourceData = require('../test/SourceData/sdata');

describe('Tasks API', () => {

    /**
     * Test the GET
     */
    describe("GET /v1/products",() =>{
        it("It Shoud GET all Products", (done) => {
            testRequest
            .get('v1/products')
            .end((err, res) => {
                if (!err) {
                    expect(err).toBe(null);
                    expect(res.statusCode).toBe(200);
                    console.log(res.body);
                    const id = res.body;
                done();
                } else {
                    console.log(err);
                }
        });
    });

    it("It Shoud GET Specified Product", (done) => {
        testRequest
        .get('v1/product/' + sourceData.prod_code)
        .end((err, res) => {
            if (!err) {
                expect(err).toBe(null);
                expect(res.statusCode).toBe(200);
                console.log(res.body);
                const item = res.body;
                expect(item.id).toEqual(sourceData.prod_code);
                expect(item.name).toEqual(sourceData.name);
                expect(item.price).toEqual(sourceData.price);
                done();
            } else {
                console.log(err);
            }
        });
    });
        
    })

    /**
     * Test the POST
     */
    describe("POST product",() =>{
        it("It Shoud POST Specified Product", (done) => {
            testRequest
            .post('v1/product')
            .set('Accept','application/json')
            .send({
                "name": "Prasad",
                "price": 10.25
              })
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (!err) {
                    expect(res.statusCode).toBe(204);
                    // console.log(res.body);
                    // const item = res.body;
                done();
                } else {
                    console.log(err);
                }
            });
        });

        it("It Shoud GET all Products", (done) => {
            testRequest
            .get('v1/products')
            .end((err, res) => {
                if (!err) {
                    expect(err).toBe(null);
                    expect(res.statusCode).toBe(200);
                    console.log(res.body);
                    const id = res.body;
                    console.log('episodeData  : ' + id[2].price);
                    
                    done();
                } else {
                    console.log(err);
                }
            });
        });
        
    })

    /**
     * Test the PUT
     */
    describe("PUT product",() =>{
        it("It Shoud PUT Specified Product", (done) => {
            testRequest
            .put('v1/product/'+sourceData.dprod_code)
            .set('Accept','application/json')
            .send({
                "name": "Prasad Test",
                "price": 35.30
              })
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (!err) {
                    expect(res.statusCode).toBe(204);
                    // console.log(res.body);
                    // const item = res.body;
                done();
                } else {
                    console.log(err);
                }
            });
        });

        it("It Shoud GET all Products", (done) => {
            testRequest
            .get('v1/products')
            .end((err, res) => {
                if (!err) {
                    expect(err).toBe(null);
                    expect(res.statusCode).toBe(200);
                    console.log(res.body);
                    const id = res.body;
                    // console.log('episodeData  : ' + id[2].price);
                    
                    done();
                } else {
                    console.log(err);
                }
            });
        });
        
    })

    /**
     * Test the DELETE
     */
    describe("DELETE product",() =>{
        it("It Shoud DELETE Specified Product", (done) => {
            testRequest
            .delete('v1/product/' + sourceData.dprod_code)
            .end((err, res) => {
                if (!err) {
                    expect(res.statusCode).toBe(204);
                    // console.log(res.body);
                    // const item = res.body;
                done();
                } else {
                    console.log(err);
                }
            });
        });

        it("It Shoud GET all Products", (done) => {
            testRequest
            .get('v1/products')
            .end((err, res) => {
                if (!err) {
                    expect(err).toBe(null);
                    expect(res.statusCode).toBe(200);
                    console.log(res.body);
                    const id = res.body;
                done();
                } else {
                    console.log(err);
                }
            });
        });
    })

});