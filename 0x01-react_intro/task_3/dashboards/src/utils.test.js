import {getLatestNotification, getFullYear, getFooterCopy} from "./utils"

it ("Test the getLatestNotification function", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})

it ("Test getFooterCopy when argument is true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
})

it ("Test getFooterCopy when argument is false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

it ("To test the full date", () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
})
