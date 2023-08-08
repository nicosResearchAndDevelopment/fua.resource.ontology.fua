module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.core',
    'dct:alternative': '@nrd/fua.resource.ontology.fua/domain',
    'dct:requires':    [{
        'dct:identifier': '../data/domain/fua.domain.ttl',
        'dct:format':     'text/turtle'
    }]
};
