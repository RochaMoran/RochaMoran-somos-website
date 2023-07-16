import Link from "next/link";
import styles from "../../../../styles/components/Header.module.scss";
import { SubMenuProps } from "@/app/models/menu";

export default function SubMenu({ columns }: SubMenuProps) {
  return (
    <ul className={`flex animate-flip-down animate-duration-300 animate-ease-in-out ${columns.length > 1 ? '' : 'justify-center'} dropdown-list ${styles.submenu} ${columns.length >= 5 ? 'flex-wrap justify-start' : ''}`}>
      {columns &&
        columns.map((column, i) => (
          <li key={i} className={styles.menuList}>
            {column.label && <span className="p-3 text-[15px] font-bold">{column.label}</span>}
            <ul
              className={`[&>li>a]:block [&>li>a]:p-3 [&>li>a]:text-[14px] [&>li>a]:font-normal ${styles.menuDropdownList}`}
            >
              {column &&
                column.options.map((option, j) => (
                  <li key={j} style={{marginLeft: (10 * option.sublevel) + "px"}}>
                    <Link href={option.url}>{'-'.repeat(option.sublevel) + " " + option.label}</Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
    </ul>
  );
}
