export function Sticker(configuration) {
  return function(target) {
    target.prototype.stickers = configuration.stickers;
  };
}

export function HookLogger(configuration?) {
  return function(target) {
    const componentName = target.name;
    const defaultHooks: string[] = [
      "ngOnInit",
      "ngOnChanges",
      "ngDoCheck",
      "ngAfterContentInit",
      "ngAfterContentChecked",
      "ngAfterViewInit",
      "ngAfterViewChecked",
      "ngOnDestroy"
    ];

    const hooksToBeLogged =
      (configuration && configuration.hooks) || defaultHooks;
    hooksToBeLogged.forEach(hookToBeLogged => {
      const original = target.prototype[hookToBeLogged];
      // console.log(
      //   `Component name-${componentName} | HookName-${hookToBeLogged} |`
      // );
      target.prototype[hookToBeLogged] = function(...args) {
        console.log(
          `Component name-${componentName} | HookName-${hookToBeLogged} |`,
          ...args
        );
        // console.log('amanananana');
        original && original.apply(this, args);
      };
    });
  };
}

export function Readonly(value) {
  return function(target, key) {
    Object.defineProperty(target, key, {
      set: () => target.key = value,
      get: () => value,
      configurable: false
    });
  };
}
