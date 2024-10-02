const mongoose = require('mongoose')

const mongooseAggregate = require('mongoose-aggregate-paginate-v2')

const videoSchema = new mongoose.Schema(
    {

        videoFile:{
            type: String,
            required: true
        },

        thumbnail:{
            type: String,
            required: true

        },

        title:{
            type: String,
            required: true

        },

        description:{
            type: String,
            required: true

        },

        duration:{
            type: Number,
            required: true

        },

        views:{
            type: Number,
            default: 0
        },

        isPublished:{
            type: Boolean,
            default: true
        },

        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

         


},{timestamps:true}
)

videoSchema.plugin(mongooseAggregate)
const Video = mongoose.model("Video", videoSchema)