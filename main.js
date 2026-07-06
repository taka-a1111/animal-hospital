/* ============================================================
 *  MiU動物病院 TOP - main.js
 *  1. スクロールフェード（各セクション要素・控えめ）
 *  2. 全画面メニュー開閉
 *  3. 診療科目 説明モーダル（figコメント準拠：＋で説明文表示）
 *  4. Q&A アコーディオン
 *  ※マニュアル：JSはmain.jsに集約・過剰なアニメーション不要
 * ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* ---------- 1. スクロールフェード ---------- */
    var fades = document.querySelectorAll('.u-fade');

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      fades.forEach(function (el) { io.observe(el); });
    } else {
      fades.forEach(function (el) { el.classList.add('is-in'); });
    }

    /* ---------- 2. 全画面メニュー ---------- */
    var menu = document.getElementById('js-menu');
    var menuOpen = document.getElementById('js-menu-open');
    var menuClose = document.getElementById('js-menu-close');

    if (menu && menuOpen && menuClose) {
      var openMenu = function () {
        menu.classList.add('is-open');
        menu.setAttribute('aria-hidden', 'false');
        menuOpen.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      };
      var closeMenu = function () {
        menu.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');
        menuOpen.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      };

      menuOpen.addEventListener('click', openMenu);
      menuClose.addEventListener('click', closeMenu);
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeMenu);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
    }

    /* ---------- 3. 診療科目 説明モーダル ---------- */
    var deptModal = document.getElementById('js-dept-modal');

    if (deptModal) {
      var deptTitle = document.getElementById('js-dept-modal-title');

      var openDept = function (name) {
        if (name) deptTitle.textContent = name;
        deptModal.classList.add('is-open');
        deptModal.setAttribute('aria-hidden', 'false');
      };
      var closeDept = function () {
        deptModal.classList.remove('is-open');
        deptModal.setAttribute('aria-hidden', 'true');
      };

      document.querySelectorAll('.js-dept-open').forEach(function (btn) {
        btn.addEventListener('click', function () {
          openDept(btn.getAttribute('data-dept'));
        });
      });
      deptModal.querySelectorAll('.js-dept-close').forEach(function (el) {
        el.addEventListener('click', closeDept);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDept();
      });
    }

    /* ---------- 4. Q&A アコーディオン ---------- */
    document.querySelectorAll('.js-qa').forEach(function (item) {
      var q = item.querySelector('.p-qa-item__q');
      if (!q) return;
      q.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        q.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  });
})();
