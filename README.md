# HOW TO USE

## User API

@desc    Login user & get token
@route   POST /api/users/auth
@access  Public

@desc    Logout user / clear cookie
@route   POST /api/users/logout
@access  Public

## Product API

@desc Get all products
@route GET /api/products
@access Public

@desc    Get single product
@route   GET /api/products/:id
@access  Public

@desc    Create a product
@route   POST /api/products
@access  Private/Admin

@desc    Update a product
@route   PUT /api/products/:id
@access  Private/Admin

@desc    Delete a product
@route   DELETE /api/products/:id
@access  Private/Admin

## License
[MIT](https://choosealicense.com/licenses/mit/)