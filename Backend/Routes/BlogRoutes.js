import express from 'express';
import {Blog} from "../Models/BlogSchema.js";


const router = express.Router();

// Endpoint to save data into the database
router.post("/", async (req, res) => {
    try {
        if (
            !req.body.BlogTitle ||
            !req.body.BlogImgUrl ||
            !req.body.BlogIntro ||
            !req.body.BlogDesc
        ) {
            return res.status(400).send({ message: "All Fields are Required" });
        }

        const NewBlog = {
            BlogTitle: req.body.BlogTitle,
            BlogImgUrl: req.body.BlogImgUrl,
            BlogIntro: req.body.BlogIntro,
            BlogDesc: req.body.BlogDesc,
        };

        const BlogSave = await Blog.create(NewBlog);

        console.log("res", BlogSave);
        return res.status(201).send(BlogSave);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

//to get all data into db
router.get("/", async (req, res) => {
    try{
        const AllBlogs = await Blog.find({});

        return res.status(200).json({
            Total_Available_Blogs: AllBlogs.length,
            data: AllBlogs
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

//To Get Single Data from DB using ID
router.get("/:id", async (req, res) => {
    try{
        const{id} = req.params;
        const NewBlog = await Blog.findById(id);
        return res.status(200).json(NewBlog);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
});

//to update the blog from its id
router.put("/:id", async (req, res) => {
    try{
        if(
            !req.body.BlogTitle ||
            !req.body.BlogImgUrl ||
            !req.body.BlogIntro ||
            !req.body.BlogDesc
        ){
            return res.status(400).send({message:"Missing fields"});
        }
         
        const {id} = req.params;
        const result = await Blog.findByIdAndUpdate(id, req.body);
    
        if(!result) {
            return res.status(404).send({message:"Blog Not found"});
        }
        return res.status(404).send({message:"Updated Successfully!"});
}
catch(error){
    console.log(error);
    res.status(500).send({message:error.message});
    }
});

//to delete a blog by its id
router.delete('/:id',async (req,res)=> {
    try{
        const  {id}=req.params;
        const result = await Blog.findOneAndDelete(id)

        if(!result) {
           return res.status(404).json({ message: 'No record of that ID' });
    }
    return res.status(200).send({ message: "Deleted successfully." });
    }
    catch(error){
        console.log(error);
        res.status(500).send({message:error.message});
    }
});



export default router;


