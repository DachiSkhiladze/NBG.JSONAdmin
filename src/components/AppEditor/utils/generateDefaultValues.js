const defaultValues = {
    'text': "",
    'number': 0,
    'multi_selector': [],
    'list': [],
    'form': {}
}

function generateDefaultState(scheme) {
    const res = defaultValues[scheme.type]

    if (scheme.type === 'form') {
        scheme.fields.forEach(x => {
            var value = defaultValues?.[x.type]
            res[x.id] = value === null ? generateDefaultState(x) : value
        });
    }

    return res
}

export default generateDefaultState