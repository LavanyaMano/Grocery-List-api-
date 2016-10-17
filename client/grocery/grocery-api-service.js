function groceryAPIService($resource){
    const api={
        groceryitems:$resource('/api/groceryitem/:id/',
            {id:'@id'},
            {
                update:{
                    method:'PUT',
                },
            }),
    }
    return api;
}

export default groceryAPIService;