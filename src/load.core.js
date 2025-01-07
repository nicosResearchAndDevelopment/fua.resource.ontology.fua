module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.core',
    'dct:alternative': '@fua/resource.ontology.fua/core',
    'dct:requires':    [{
        'dct:identifier': '../data/core/fua.core.ttl',
        'dct:format':     'text/turtle'
    }]
};
