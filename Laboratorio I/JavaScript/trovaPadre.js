function trovaPadre ( T, n ) {

    if ( T.val == n  || !T )
        return undefined;

    for ( let f of T.figli ) {

        if ( f.val == n)
            return T.val;
        else
            if ( trovaPadre ( f, n ) )
              return trovaPadre ( f, n );

    }
}
