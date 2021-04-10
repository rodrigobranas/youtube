import express from 'express';
import expressRouteAdapter from '../adapter/expressRouteAdapter.js';
import * as postController from '../controller/postController.js';
const app = express();

app.use(express.json());
app.get('/posts', expressRouteAdapter(postController.getPosts));
app.post('/posts', expressRouteAdapter(postController.savePost));

app.listen(3000);
