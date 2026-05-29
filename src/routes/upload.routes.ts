import { Router } from 'express';
import multer from 'multer';

const router = Router();

const upload = multer({
  dest: 'src/uploads/'
});

router.post('/', upload.single('file'), (req, res) => {
  return res.json({
    message: 'File uploaded successfully',
    file: req.file
  });
});

export default router;