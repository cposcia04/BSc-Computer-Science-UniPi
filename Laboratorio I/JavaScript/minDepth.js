function minDepth(T) {
    let depthSx = 0;
    let depthDx = 0;
    
    if(T == undefined) {
        return -1;
    }
    
    depthSx = minDepth(T.sx);
    depthDx = minDepth(T.dx);
    
    if(depthSx == -1) {
        return 1 + depthDx;
    }
    
    if(depthDx == -1) {
        return 1 + depthSx;
    }
    
    if(depthSx < depthDx) {
        return depthSx + 1;
    } else {
        return depthDx + 1;
    }

}
