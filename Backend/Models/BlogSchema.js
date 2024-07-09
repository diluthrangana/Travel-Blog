import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema(
    {
        BlogTitle: {
            type: String,
            required: true,
        },
        BlogImgUrl: {
            type: String,
            required: true,
        },
        BlogIntro: {
            type: String,
            required: true,
        },
        BlogDesc: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Blog= mongoose.model('Blog', BlogSchema);