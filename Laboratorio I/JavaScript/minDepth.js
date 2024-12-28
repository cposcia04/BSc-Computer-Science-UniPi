function minDepth(T) {
    let depthSx = 0;
    let depthDx = 0;
    
    if(T == undefined) { //albero vuoto: restituisco -1
        return -1;
    }
    
    depthSx = minDepth(T.sx); //chiamate ricorsive su sottoalbero destro e sinistro
    depthDx = minDepth(T.dx);
    
    if(depthSx == -1) {     //se non c'è il sottoalbero sinistro, la profondità è radice + profondità destra
        return 1 + depthDx;
    }
    
    if(depthDx == -1) {    //se non c'è il sottoalbero destro, la profondità è radice + profondità sinistra
        return 1 + depthSx;
    }
    
    if(depthSx < depthDx) { 
        return depthSx + 1;
    } else {
        return depthDx + 1;
    }

}
