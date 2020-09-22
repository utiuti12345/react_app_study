import {createStore} from "redux";

const initData = {
    data: [
        {message: 'sample data', created: new Date()}
    ],
    message: 'please type message',
    mode: 'default',
    fdata: []
};

// レデューサー
export function memoReducer(state = initData, action) {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        case 'DELETE':
            return deleteReduce(state, action);
        case 'FIND':
            console.log(action);
            return findReduce(state, action);
        default:
            return state;
    }
}

// レデュースアクション

// メモ追加のレデュースアクション
function addReduce(state, action) {
    let data = {
        message: action.message,
        created: new Date()
    };

    let newdata = state.data.slice();
    newdata.unshift(data);
    return {
        data: newdata,
        message: 'Added!',
        mode: 'default',
        fdata: []
    };
}

// メモ削除のレデュースアクション
function deleteReduce(state, action) {
    let newdata = state.data.slice();
    newdata.splice(action.index, 1);
    return {
        data: newdata,
        message: 'Deleted!!',
        mode: 'delete',
        fdata: []
    };
}

// メモ検索のレデュースアクション
function findReduce(state, action) {
    let f = action.find;
    let fdata = [];
    state.data.forEach((value) => {
        if (value.message.indexOf(f) >= 0) {
            fdata.push(value);
        }
    });
    return {
        data: state.data,
        message: "find " + f + ":",
        mode: 'find',
        fdata: fdata,
    };
}

// アクションクリエーター

// メモのアクション
export function addMemo(text) {
    return {
        type: 'ADD',
        message: text,
    }
}

// メモ削除のアクション
export function deleteMemo(num) {
    return {
        type: 'DELETE',
        index: num,
    }
}

// メモ検索のアクション
export function findMemo(text) {
    return {
        type: 'FIND',
        find: text,
    }
}

export default createStore(memoReducer);