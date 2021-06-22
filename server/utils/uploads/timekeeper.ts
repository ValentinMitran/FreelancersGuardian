import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "mortalcore-dev",
    acl: "private",
    metadata (req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key (req, file, cb) {
      const filename = file.originalname;
      const fileExtension = filename.split(".")[1];
      const date = req.body.date + req.body.month + req.body.year;
      cb(
        null,
        req.body.username + "/timemachine/" + date + "." + fileExtension
      );
    },
  }),
});

export default upload;
