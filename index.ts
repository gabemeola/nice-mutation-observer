type ObserveCallBack = (mutation: MutationRecord) => any;

export default function observe(
  el: Node,
  type: MutationRecordType,
  opts: MutationObserverInit | ObserveCallBack,
  cb: ObserveCallBack | null = null
) {
  let _cb: ObserveCallBack;
  let _opts: MutationObserverInit | undefined = opts as MutationObserverInit;
  if (cb === null) {
    _cb = opts as ObserveCallBack;
    _opts = undefined;
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === type) {
        _cb(mutation)
      }
    });
  });

  observer.observe(el, _opts);

  return observer.disconnect;
}
