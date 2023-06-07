import { EffectCallback, useEffect, useRef } from "react";

export default (_effect: EffectCallback) => {
    const effect = useRef<EffectCallback>(_effect);
    const destroy = useRef<any>();
    const effectCalled = useRef<boolean>(false);
    const rendered = useRef<boolean>(false);
    if (effectCalled.current) {
        rendered.current = true;
    }

    useEffect(() => {

        if (!effectCalled.current) {
            destroy.current = effect.current();
            effectCalled.current = true;
        }
        return () => {
            if (rendered.current === false) return;
            if (destroy.current) destroy.current();
        }
    })
}