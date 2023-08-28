const initState =
    [
        {
            name: "Khuong Quoc Phap",
            email: "phapkhuong@gmail.com",
            phone: "0912818911",
            message: "abc xyz"
        },
        {
            name: "Khuong Tu Thanh",
            email: "thanhkhuong@gmail.com",
            phone: "0905897891",
            message: "def ghi"
        },
        {
            name: "Thai Ha",
            email: "thaiha@gmail.com",
            phone: "0906894267",
            message: "utx vbd"
        }
    ];

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            state = [...state, action.payload];
            return state;
        default:
            return state;
    }
}