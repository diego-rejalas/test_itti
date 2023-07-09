import { message } from "antd";
import axios from "axios";

const todoService = {}

todoService.listingAllResources = async () => {
    return await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/todos`,
        responseType: "json",
    })
        .then((response) => response.data)
        .catch((err) => err);
};

todoService.creatingResource = async (values) => {

    return await axios({
        method: "post",
        url: `https://jsonplaceholder.typicode.com/todos`,
        data: values,
    })
        .then((response) => {
            message.success('Se Agrego Correctamente!');
            return response.data
        })
        .catch((err) => {
            message.error('Error Al Crear!');
            return err
        });
};

todoService.updatingResource = async (values) => {

    return await axios({
        method: "post",
        url: `https://jsonplaceholder.typicode.com/todos`,
        data: values,
    })
        .then((response) => {
            message.success('Se Modificó Correctamente!');
            return response.data
        })
        .catch((err) => {
            message.error('Error Al Crear!');
            return err
        });
};

todoService.deletingResource = async (id) => {

    return await axios({
        method: "delete",
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    })
        .then((response) => {

            message.success('Se eliminó Correctamente!');
            return response.data
        })
        .catch((err) => {
            message.error('Error Al Eliminar!');
            return err;
        }
        );
};

export default todoService;