
export enum JavaType {
    interface = 'interface',
    void = 'void',
    int = 'int',
    long = 'long',

}

//  java访问控制符
export enum JavaAccessControl {
    default = 'default',
    public = 'public',
    private = 'private',
    protected = 'protected',
}

//  java修饰符
export enum JavaModify {
    abstract = 'abstract',
    class = 'class',
    extends = 'extends',
    final = 'final',
    implements = 'implements',
    interface = 'interface',
    native = 'native',
    new = 'new',
    static = 'static',
    strictfp = 'strictfp',
    synchronized = 'synchronized',
    transient = 'transient',
    volatile = 'volatile',
}

export enum JavaImportType {
    import = 'import',
    package = 'package',
}

export interface JavaFunction {
    extends?: string;
    returnType: JavaType;
    exportType: JavaModify;
    class: boolean;
}