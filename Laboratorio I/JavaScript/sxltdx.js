function sxltdx(T) {
  if(T == undefined) {
    return;     //se l'albero è vuoto non fare nulla
  }
  
  sxltdx(T.sx) //chiamata ricorsiva sul sottoalbero sinistro
  sxltdx(T.dx) //chiamata ricorsiva sul sottoalbero destro
  
  if (T.sx && T.dx) {  //se sottoalbero destro e sinistro sono definiti
    if (T.dx.val <= T.sx.val) { // se il valore destro è <= del sinistro scambia i rami
      [T.sx, T.dx] = [T.dx, T.sx];
    }
  }
}
