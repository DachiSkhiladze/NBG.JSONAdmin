const defaultValues = {
    'text': "",
    'number': 0,
    'multi_selector': [],
    'list': [],
}

function generateDefaultState(scheme) {
    const res = {}
    scheme.fields.forEach(x => {
        var value = defaultValues?.[x.type]
        res[x.id] = value === null ? generateDefaultState(x) : value
    });
    return res
}

export default generateDefaultState