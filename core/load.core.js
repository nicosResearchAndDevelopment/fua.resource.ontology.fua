module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.core',
    'dct:alternative': '@nrd/fua.resource.ontology.fua/core',
    'dct:requires':    [{
        'dct:identifier': './fua.core.ttl',
        'dct:format':     'text/turtle'
    }]
};
