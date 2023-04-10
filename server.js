import express, { json } from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import path from "path";
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";


dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "developement") {
    app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is Runn....");
    });
}

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome'
    })
})



const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white);
})
