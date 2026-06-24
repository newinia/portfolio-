export default function Footer() {
  return (
    <footer className="border-t">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        flex
        justify-between
        items-center
        "
      >
        <div>
          <h3 className="font-bold text-xl">
            Portfolio.
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            © 2026 All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}