const express = require('express');
const { query } = require('./db');
const app = express();
const pool  = require('./db');

app.use(express.json()) //=> req.body

//ROUTES 

// GET all  polo
app.get('/polo', async (req, res)=>{
   try {
      const allPolo  = await pool.query('SELECT * FROM polo');
      res.json(allPolo.rows)
      
   } catch (error) {
      console.log(err.message);
      
   }
})

// get a polo 
app.get('/polo/:id', async (req, res)=>{
    const {  id } = req.params;
    try {
       const polo = await pool.query('SELECT * FROM polo WHERE polo_id =  $1', [id]);
       res.json(polo.rows[0]);
       
    } catch (error) {
       console.log(err.message);
       
    }

});

//create a polo

app.post('/polo', async (req, res)=>{
   try{
      // await
 const {description} = req.body;
 const newPolo = await pool.query('INSERT INTO polo (description) VALUES ($1) RETURNING *',[description]);
 res.json(newPolo.rows[0]);

   } catch (error) {
      console.log(err.message);
   }
});


// update  polo 

app.put('/polo/:id', async (req, res)=>{
   try {
      const {id} = req.params;   // where
      const {description}= req.body; // set

      const  updatepolo = await pool.query('UPDATE polo SET description = $1 WHERE polo_id =$2', [description, id ]);
      res.json('polo was updated!')
      
   } catch (error) {
      
      console.log(err.message);
   }
});

// delete a polo


app.delete('/polo/:id', async (req, res )=>{
   try {
      const {id} = req.params;
      const deletepolo = await  pool.query("DELETE  FROM polo WHERE polo_id=$1", [id]);
      res.json('polo was successfully deleted!');
   } catch (error) {
      console.log(err.message);
      
   }
});




module.exports = app.listen(3000, (req, res)=>{
   console.log('server started at port 3000');
})