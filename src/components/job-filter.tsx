import {
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react';

type JobsFilterProps = PopoverProps & {
  title: string;
  filters: Record<string, any>;
  filterKey: string;
  options: { value: string; label: string }[];
  onCheckboxChange: (key: string, value: string) => void;
};

export function JobFilter({
  title,
  filters = {},
  filterKey,
  options,
  onCheckboxChange,
  ...props
}: JobsFilterProps) {
  return (
    <Popover offset={props.offset ?? [72, 8]}>
      <PopoverTrigger>
        <Button
          flex="none"
          colorScheme="blue"
          variant={filters[filterKey]?.length ? 'solid' : 'outline'}
          leftIcon={
            filters[filterKey]?.length ? (
              <Badge colorScheme="blue">{filters[filterKey].length}</Badge>
            ) : undefined
          }
        >
          {title}
        </Button>
      </PopoverTrigger>

      <PopoverContent rounded="xl" p="2">
        <PopoverBody>
          <CheckboxGroup colorScheme="green" defaultValue={filters[filterKey] ?? []}>
            <Stack spacing="1" direction="column">
              {options.map((option) => (
                <Checkbox
                  value={option.value}
                  colorScheme="blue"
                  key={`${filterKey}__${option.value}`}
                  onChange={(e) => onCheckboxChange(filterKey, e.target.value)}
                >
                  {option.label}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
