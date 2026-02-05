"use strict";

(globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["7124"],
  {
    292: function (e, a, t) {
      t.r(a);
      t.d(a, {
        default: () => v,
      });
      var i = t(3891);
      var l = t(84434);
      var o = t(24488);
      var s = t(13084);
      var n = t.n(s);
      var r = t(13113);
      var c = t(30329);
      var m = t(48867);
      var _ = t(89156);
      var d = t(52002);
      var u = t(4201);
      const h = (0, c.makeSetStoreField)("viewer");
      const g = "chatik.notification.viewerLoadingError";
      const w = ({ trls: e }) => {
        const a = (0, l.useDispatch)();
        const t = (0, d.Z)();
        const s = (0, m.v)((e) => e.viewer);
        (0, i.useEffect)(() => {
          if (s != null && s.meta) {
            o.default.sendHHEvent("element_shown", {
              elementName: "chat_viewer",
              chatId: s.meta.chatId,
              messageId: s.meta.messageId,
            });
          }
        }, [s]);
        const c = (0, i.useCallback)(
          (e) => {
            if (s == null ? undefined : s.meta) {
              n()({
                buttonName: e,
                chatId: s.meta.chatId,
                messageId: s.meta.messageId,
              });
            }
          },
          [s],
        );
        const _ = (0, i.useCallback)(() => {
          c("chat_viewer_close");
          a(h(null));
        }, [a, c]);
        const w = (0, i.useCallback)(() => c("chat_viewer_rotate"), [c]);
        const v = (0, i.useCallback)(() => c("chat_viewer_download"), [c]);
        const b = (0, i.useCallback)((e) => c(`chat_viewer_zoom_${e}`), [c]);
        const k = (0, i.useCallback)(() => {
          t({
            kind: "error",
            content: e[g],
            autoClose: true,
          });
        }, [t, e]);
        if (s) {
          return (0, u.jsx)(r.A, {
            imageUrl: s.image.url,
            imageOriginalWidth: s.image.width,
            imageOriginalHeight: s.image.height,
            title: s.viewerTitle,
            subtitle: s.viewerSubtitle,
            onClose: _,
            onZoom: b,
            onRotate: w,
            onDownload: v,
            onImageLoadingError: k,
          });
        } else {
          return null;
        }
      };
      w.displayName = "src/components/Viewer/Viewer";
      const v = (0, _.Z)((0, i.memo)(w));
    },
  },
]);
//# sourceMappingURL=Viewer.5318eb6750afd941.js.map
