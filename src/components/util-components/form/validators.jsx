export const validateTitle = (_, value) => {
    const isEmpty = !value || value.trim() === '';
    const hasNumbers = /\d/.test(value);

    if (isEmpty) {
        return Promise.reject('El título no debe estar vacío');
    }

    if (hasNumbers) {
        return Promise.reject('El título no debe contener caracteres numéricos');
    }

    return Promise.resolve();
};

export const validateCheckbox = (_, value) => {
    if (!value) {
        return Promise.reject('Debe seleccionar el estado');
    }

    return Promise.resolve();
};
