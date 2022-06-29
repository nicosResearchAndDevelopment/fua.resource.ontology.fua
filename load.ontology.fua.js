module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ontology.fua',
    'dct:alternative': '@nrd/fua.resource.ontology.fua',
    'dct:requires':    [{
        'dct:identifier': './fua.ontology.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './core/load.core.js',
        'dct:format':     'application/fua.load+js'
    }]
};
