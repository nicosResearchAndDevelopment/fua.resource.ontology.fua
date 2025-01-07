module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.fua',
    'dct:requires':    [{
        'dct:identifier': '../data/fua.ontology.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './load.core.js',
        'dct:format':     'application/fua.load+js'
    }, {
        'dct:identifier': './load.domain.js',
        'dct:format':     'application/fua.load+js'
    }]
};
