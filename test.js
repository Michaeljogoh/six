let chai = require('chai');
let chaiHttp =require('chai-http');
let server = require('./app');

// Assertion style
chai.should();

chai.use(chaiHttp);


describe('Tasks API ', () =>{
   // Test the GET route

   describe('GET /polo', ()=>{
      it('It should GET all the tasks ', (done)=>{
         chai.request(server)
         .get('/get')
         .end((err,response)=>{
           response.should.have.status(200);
           response.body.should.be.a('array');
           response.body.length.should.be.eq(3)
            done();
         })
      })
      describe('GET /polo', ()=>{
         it('It should NOT GET all the tasks ', (done)=>{
            chai.request(server)
            .get('/get')
            .end((err,response)=>{
              response.should.have.status(404);
               done();
            })
         })
      })

   })


// Test the GET by(id) route


// Test the POST route

describe('POST /polo', ()=>{
   it('It should POST all the tasks ', (done)=>{
      const poloId = {
         name: "Task 4",
         completed: false
      };
      chai.request(server)
      .get('/post' + poloId)
      .end((err,response)=>{
        response.should.have.status(201);
        response.body.should.be.a('object')
        response.body.should.have.property('id').eq(4);
        response.body.should.have.property('name').eq('Task 4');
        response.body.should.have.property('completed'.eq(false));
    done();
      })
   })
      it('It should POST a new task without the property name ', (done)=>{
         const poloId = {
         
            completed: false
         };
         chai.request(server)
         .get('/post' + poloId)
         .end((err,response)=>{
           response.should.have.status(404);
         done();
         });
      });
});

      


// Test the PATCH route


// Test the DElETE route



})




