export const pathName = {
    LOGIN: "/dang-nhap",
    REGISTER: "/dang-ki",
    FORGOT_PASSWORD: "/quen-mat-khau",
    RESET_PASSWORD: "/doi-mat-khau",
    VERIFY_REGISTER: "/verify-register",
    HOME: "/",
    PRODUCTS: "/products",
    CART: "/cart",
    CHECKOUT: "/checkout",
    PRODUCT_DETAIL: "/products/:id",

    // ADMIN PATH
    DASHBOARD: "/thong-ke",
    CATEGORIES: "/quan-ly-danh-muc",
    PRODUCT_MANAGEMENT: "/quan-ly-san-pham",
    VARIANT_MANAGEMENT: "/quan-ly-san-pham/bien-the",
    ADD_PRODUCT: "/quan-ly-san-pham/them",
    UPDATE_PRODUCT: "/quan-ly-san-pham/sua/:id",
    USER_MANAGEMENT: "/quan-ly-nguoi-dung",
    ORDER_MANAGEMENT: "/quan-ly-orders",
    ATTR_MANAGEMENT: "quan-ly-attr",
} as const
