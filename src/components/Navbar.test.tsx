// @vitest-environment jsdom
import { describe, it, expect, beforeAll, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

beforeAll(() => {
  // jsdom polyfills required by framer-motion / router
  if (!window.matchMedia) {
    window.matchMedia = ((query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList) as unknown as typeof window.matchMedia;
  }
  if (!("scrollTo" in window)) {
    (window as unknown as { scrollTo: () => void }).scrollTo = () => {};
  }
});


function setup() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Navbar />
    </MemoryRouter>
  );
}

describe("Navbar mobile menu", () => {
  afterEach(cleanup);

  it("opens the overlay when the hamburger is clicked", async () => {
    const user = userEvent.setup();
    setup();
    const button = screen.getByRole("button", { name: /open menu/i });
    await user.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    // Overlay links should now be in the document (both desktop + mobile copies)
    const projectLinks = screen.getAllByRole("link", { name: /projects/i });
    expect(projectLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("closes the overlay when the close button is clicked", async () => {
    const user = userEvent.setup();
    setup();
    const openBtn = screen.getByRole("button", { name: /open menu/i });
    await user.click(openBtn);
    const closeBtn = screen.getByRole("button", { name: /close menu/i });
    await user.click(closeBtn);
    expect(closeBtn.getAttribute("aria-expanded")).toBe("false");
  });
});
