class utils {

    static wildCardSearch(list, input) {
        const searchText = (item) => {
            for (let key in item) {
                if (item[key] == null) {
                    continue;
                }
                if (
                    item[key]
                        .toString()
                        .toUpperCase()
                        .indexOf(input.toString().toUpperCase()) !== -1
                ) {
                    return true;
                }
            }
        };
        list = list.filter((value) => searchText(value));
        return list;
    }

    static filterArray(list, key, value) {
        let data = list;
        if (list) {
            data = list.filter((item) => item[key] === value);
        }
        return data;
    }

    static onSearch = (e, list, setList, tableData) => {
        const value = e.currentTarget.value;
        const isEmpty = () => {
            if (list.length === 0) return true;
        };
        const searchArray = value && !isEmpty ? list : tableData;
        const data = this.wildCardSearch(searchArray, value);
        setList(data);
    };



    static validateTitle = (_, value) => {
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

    static validateCheckbox = (_, value) => {
        if (!value) {
            return Promise.reject('Debe seleccionar el estado');
        }

        return Promise.resolve();
    };
}
export default utils;